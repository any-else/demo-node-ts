import { DATA_NOTE } from "./../data/note";
import { Express, Request, Response } from "express";

export const noteRoute = (app: Express) => {
  // get all
  app.get("/api/v1/note/list", (req: Request, res: Response) => {
    const dataNote = DATA_NOTE;
    res.status(200).json({
      message: "success",
      data: dataNote,
    });
  });

  // search theo name
  app.get("/api/v1/note/search", (req: Request, res: Response) => {
    const { name } = req.query;
    const dataSearch = DATA_NOTE.filter((item) =>
      item.name.includes(name as string)
    );

    if (dataSearch) {
      res.status(200).json({
        data: dataSearch,
      });
    } else {
      res.status(400).json({
        message: "không tìm thấy",
      });
    }
  });
  // get theo id
  app.get("/api/v1/note/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const dataById = DATA_NOTE.find((item) => item.id == parseInt(id));
    if (dataById) {
      res.status(200).json({
        data: dataById,
      });
    } else {
      res.status(400).json({
        message: "không tìm thấy",
      });
    }
  });

  // create note
  app.post("/api/v1/note/create", (req: Request, res: Response) => {
    const { name, time } = req.body;
    const newNote = {
      id: DATA_NOTE.length + 2,
      name,
      time,
    };
    DATA_NOTE.push(newNote);
    console.log("DATA_NOTE", DATA_NOTE);

    res.status(201).json({
      message: "success",
    });
  });
  // update note

  // delete note
};
