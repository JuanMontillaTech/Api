const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM   activofijodetalle',(Error,    activofijodetalle)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(   activofijodetalle);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM   activofijodetalle WHERE id = ?',[id],(Error,    activofijodetalle)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(   activofijodetalle);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO   activofijodetalle SET ?',[data],(Error,    activofijodetalle)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(   activofijodetalle);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE   activofijodetalle SET ? WHERE id = ?',[data, id],(Error,    activofijodetalle)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(   activofijodetalle); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM   activofijodetalle WHERE ID= ?',[data],(Error,    activofijodetalle)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;