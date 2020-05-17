const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM  semestredetalle',(Error,   semestredetalle)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(  semestredetalle);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM  semestredetalle WHERE id = ?',[id],(Error,   semestredetalle)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(  semestredetalle);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO  semestredetalle SET ?',[data],(Error,   semestredetalle)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(  semestredetalle);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE  semestredetalle SET ? WHERE id = ?',[data, id],(Error,   semestredetalle)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(  semestredetalle); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM  semestredetalle WHERE ID= ?',[data],(Error,   semestredetalle)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;