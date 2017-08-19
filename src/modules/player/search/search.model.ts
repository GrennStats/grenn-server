import {Schema, Document} from "mongoose";
import {mongoConnection} from "../../model";

export const searchSchema: Schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    playerId: String,
});

export interface Search extends Document {
    createdAt: Date;
    playerId: string;
}

export const SearchModel = mongoConnection.model<Search>("SearchEntries", searchSchema);