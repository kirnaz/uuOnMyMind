import { makeAutoObservable} from "mobx";

export default class NotesStorage {
    constructor() {
        this._types = [
            {id: 1, name : "Koupit"},
            {id: 2, name : "Práce"},
            {id: 3, name : "Dům"}
        ]
        this._notes = [
            {id:1, name: "Koupit salam", description:"ergtrh tr h trghert h tre h ert h"},
            {id:2, name: "Koupit mleko", description:"ergtrh tr h trghert h tre h ert h"},
            {id:3, name: "Dodelat projekt", description:"ergtrh tr h trghert h tre h ert h"},
            {id:4, name: "Nezapomenout na vyplatu", description:"ergtrh tr h trghert h tre h ert h"},
            {id:5, name: "Uvarit vecerze", description:"ergtrh tr h trghert h tre h ert h"},
            {id:6, name: "Uklid celehe domu", description:"ergtrh tr h trghert h tre h ert h"},
            {id:7, name: "Koupit syr", description:"ergtrh tr h trghert h tre h ert h"},
            {id:8, name: "Koupit zmrzlinu", description:"ergtrh tr h trghert h tre h ert h"},
            {id:9, name: "Dodelat Report", description:"ergtrh tr h trghert h tre h ert h"},
            {id:10, name: "Nezapomenout kolegi", description:"ergtrh tr h trghert h tre h ert h"},
            {id:11, name: "Uvarit snidane na zitra", description:"ergtrh tr h trghert h tre h ert h"},
            {id:12, name: "Uklid koupelny", description:"ergtrh tr h trghert h tre h ert h"}
        ]
        this._selectedTypes = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setNotes(notes) {
        this._notes = notes
    }
    setSelectedType(type) {
        this._selectedTypes = type
    }
    get types() {
        return this._types
    }
    get notes() {
        return this._notes
    }
    get selectedType() {
        return this._selectedTypes
    }
}