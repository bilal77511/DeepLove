"use server";

import connectDB from "../lib/mongodb";
import { EmailModel } from "../lib/models/postModel";

export async function saveEmail(formData) {
    const email = formData.get("email");

    if (!email || !email.includes("@")) {
        return { error: "Invalid email address." };
    }

    try {
        console.log("Saving Email");
        await connectDB();
        // ✅ Save post to MongoDB
        const newPost = await EmailModel.create({ email: email });
        return { success: true, email: newPost.email };
    } catch (error) {
        console.error("Error saving post:", error);
        return { error: "Failed to save post." };
    }
}
