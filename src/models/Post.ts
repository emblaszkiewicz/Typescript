import mongoose, { Schema, Document } from "mongoose";

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

export default mongoose.model('Post', PostSchema);