import { NOTES_ROUTE, NOTE_ROUTE } from "./utils/consts";
import Notes from "./routes/Notes";
import Note from "./routes/Note";

export const publicRoutes = [
    {
        path: NOTES_ROUTE,
        Component: Notes
    },
    {
        path: NOTE_ROUTE + "/:id",
        Component: Note
    }
]