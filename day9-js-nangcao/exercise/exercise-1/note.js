var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var notes = [];
var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function () {
        notes.push({ title: this.title, content: this.content });
    };
    return Note;
}());
var NoteList = /** @class */ (function (_super) {
    __extends(NoteList, _super);
    function NoteList(title, content, listNotes) {
        var _this = _super.call(this, title, content) || this;
        _this.listNotes = listNotes;
        return _this;
    }
    NoteList.prototype.addNoteToList = function (arrayList) {
        arrayList.forEach(function (note) {
            return notes.push(note);
        });
    };
    return NoteList;
}(Note));
var arry = [
    { title: 'title1', content: 'content1' },
    { title: 'title2', content: 'content2' },
    { title: 'title2', content: 'content2' },
    { title: 'title2', content: 'content2' },
    { title: 'title2', content: 'content2' },
];
var note1 = new Note('This is Title', 'This is content');
note1.addNote();
console.log(notes);
var noteList = new NoteList('title', ' content', arry);
noteList.addNoteToList(arry);
console.log(notes);
