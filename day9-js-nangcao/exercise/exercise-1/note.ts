let notes: Array<object> = []

class Note {

   title: string
   content: string
   static addNote: any;

   constructor(title: string, content: string) {

      this.title = title;
      this.content = content;
   }
   addNote(): void {
      notes.push({ title: this.title, content: this.content });

   }
}
class NoteList extends Note {
   listNotes: Array<object>


   static addNoteToList: any;
   constructor(listNotes: Array<object>, title: string, content: string,) {

      super(title, content)
      this.listNotes = listNotes

   }
   addNoteToList(arrayList: Array<object>): void {
      arrayList.forEach(note => {
         return notes.push(note)
      })

   }
}

let arry: Array<object> = [
   { title: 'title1', content: 'content1' },
   { title: 'title2', content: 'content2' },
   { title: 'title2', content: 'content2' },
   { title: 'title2', content: 'content2' },
   { title: 'title2', content: 'content2' },
]
let note1 = new Note('This is Title', 'This is content')
note1.addNote()
console.log(notes);
let noteList = new NoteList(arry, 'dgggggggg', 'dfds')
noteList.addNoteToList(arry)
console.log(notes);