import mongoose from "mongoose"

// 1st: Create Schema
// 2nd: Create model based on Schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } //createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;