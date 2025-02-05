let notes = [
    {
      id: 1,
      heading: "Mempelajari Javascript",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
      created_by: "John Doe",
      created_at: Date.now() 
    }
  ];
  
  const createNote = (heading, description, created_by) => {
    
    const newNote = {
      id: notes.length + 1,  
      heading: heading,  
      description: description,  
      created_by: created_by,  
      created_at: Date.now()  
    };
  
   
    notes.push(newNote);
  };
  
  const readNote = () => {
    
    console.log("Semua catatan:");
    console.log(notes);
  };
  
  const updateNote = (id, newHeading, newDescription) => {
    
    const note = notes.find(note => note.id === id);
    if (note) {
     
      note.heading = newHeading;
      note.description = newDescription;
    } else {
      
      console.log("Catatan tidak ditemukan!");
    }
  };
  
  const deleteNote = (id) => {
    
    notes = notes.filter(note => note.id !== id);
  };
  
 
  createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe");
  readNote();
  console.log("=================================================================================================================")
  updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
  readNote();
  console.log("=================================================================================================================")
  deleteNote(1);
  readNote();
  