import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";

const router = express.Router();

export default router;

//controllers
router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

// app.get("/api/notes", (req, res) => {
//     //send the notes
//     res.status(200).send("You have recieved 20 notes.");                                      
// });

// app.post("/api/notes", (req, res) => {
//     res.status(201).json({ message: "Note Created!"});
// });

// app.put("/api/notes:id", (req, res) => {
//     res.status(200).json({ message: "Note Updated!"});
// });

// app.delete("/api/notes:id", (req, res) => {
//     res.status(200).json({ message: "Note Deleted!"});
// });