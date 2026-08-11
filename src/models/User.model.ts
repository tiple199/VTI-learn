import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    phone: {
      type: String
    },

    role: {
      type: String,
      enum: [
        "USER",
        "AGENT",
        "OWNER",
        "INVESTOR",
        "ADMIN"
      ],
      default: "USER"
    }
  },
  {
    timestamps: true
  }
);

export const UserModel =
  mongoose.model<IUser>("User", UserSchema);