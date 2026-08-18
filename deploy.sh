#!/bin/bash

# ==============================================================================
# Script Deploy Tá»± Äá»™ng cho Real Estate App (Backend + Client)
# ==============================================================================

# Dá»«ng script ngay láº­p tá»©c náº¿u cÃ³ báº¥t ká»³ lá»‡nh nÃ o bá»‹ lá»—i
set -e

# Khai bÃ¡o mÃ u sáº¯c hiá»ƒn thá»‹ log
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# HÃ m há»— trá»£ ghi log
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Xá»­ lÃ½ lá»—i khi lá»‡nh tháº¥t báº¡i
trap 'log_error "Deploy tháº¥t báº¡i táº¡i dÃ²ng $LINENO. Vui lÃ²ng kiá»ƒm tra láº¡i log trÃªn."; exit 1' ERR

# TÃªn nhÃ¡nh Git máº·c Ä‘á»‹nh (hoáº·c truyá»n tá»« argument vÃ­ dá»¥: ./deploy.sh main)
BRANCH="${1:-main}"

echo "=================================================================="
log_info "Báº¯t Ä‘áº§u quÃ¡ trÃ¬nh Deploy dá»± Ã¡n Real Estate Marketplace..."
echo "=================================================================="

# 1. Kiá»ƒm tra Git
if ! command -v git &> /dev/null; then
    log_error "Git chÆ°a Ä‘Æ°á»£c cÃ i Ä‘áº·t trÃªn server."
    exit 1
fi

# 2. Cáº­p nháº­t mÃ£ nguá»“n tá»« Git
log_info "1/5. Äang láº¥y mÃ£ nguá»“n má»›i nháº¥t tá»« nhÃ¡nh '${BRANCH}'..."
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull origin "$BRANCH"
log_success "ÄÃ£ cáº­p nháº­t mÃ£ nguá»“n thÃ nh cÃ´ng!"

# 3. Deploy Backend
log_info "2/5. Äang cÃ i Ä‘áº·t thÆ° viá»‡n vÃ  Build Backend (TypeScript)..."
if [ ! -f ".env" ]; then
    log_warning "ChÆ°a tháº¥y file .env á»Ÿ thÆ° má»¥c gá»‘c! Äang sao chÃ©p tá»« .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        log_warning "Vui lÃ²ng cáº­p nháº­t cÃ¡c thÃ´ng sá»‘ báº£o máº­t trong file .env náº¿u cáº§n."
    fi
fi

npm install
log_info "Äang biÃªn dá»‹ch TypeScript backend..."
npm run build
log_success "Build Backend thÃ nh cÃ´ng!"

# 4. Deploy Frontend Client (náº¿u cÃ³ thÆ° má»¥c client)
if [ -d "client" ]; then
    log_info "3/5. PhÃ¡t hiá»‡n thÆ° má»¥c 'client'. Báº¯t Ä‘áº§u Build Frontend (Vite/React)..."
    cd client
    
    if [ ! -f ".env" ] && [ -f ".env.example" ]; then
        cp .env.example .env
    fi

    npm install
    log_info "Äang build cÃ¡c tá»‡p tÄ©nh Frontend..."
    npm run build
    cd ..
    log_success "Build Frontend thÃ nh cÃ´ng!"
else
    log_info "3/5. Bá» qua bÆ°á»›c Frontend (khÃ´ng tháº¥y thÆ° má»¥c client)."
fi

# 5. Khá»Ÿi cháº¡y / Reload báº±ng PM2
log_info "4/5. Äang khá»Ÿi Ä‘á»™ng láº¡i dá»‹ch vá»¥ vá»›i PM2..."
if ! command -v pm2 &> /dev/null; then
    log_warning "PM2 chÆ°a Ä‘Æ°á»£c cÃ i Ä‘áº·t toÃ n cá»¥c. Äang cÃ i Ä‘áº·t PM2..."
    npm install -g pm2
fi

if [ -f "ecosystem.config.js" ]; then
    pm2 reload ecosystem.config.js --env production || pm2 start ecosystem.config.js --env production
else
    # Reload hoáº·c start app
    if pm2 list | grep -q "real-estate-backend"; then
        pm2 restart real-estate-backend --update-env
    else
        pm2 start dist/server.js --name "real-estate-backend"
    fi
fi

# LÆ°u láº¡i danh sÃ¡ch PM2 Ä‘á»ƒ tá»± khá»Ÿi Ä‘á»™ng cÃ¹ng há»‡ thá»‘ng khi reboot
pm2 save

log_success "5/5. QuÃ¡ trÃ¬nh reload dá»‹ch vá»¥ hoÃ n táº¥t!"

echo "=================================================================="
log_success "DEPLOY HOÃ€N Táº¤T THÃ€NH CÃ”NG! ðŸŽ‰"
echo "=================================================================="
pm2 status real-estate-backend
