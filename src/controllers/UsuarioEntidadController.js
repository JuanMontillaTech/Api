const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM  usuarioentidades',(Error,   usuarioentidades)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(  usuarioentidades);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM  usuarioentidades WHERE id = ?',[id],(Error,   usuarioentidades)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(  usuarioentidades);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO  usuarioentidades SET ?',[data],(Error,   usuarioentidades)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(  usuarioentidades);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE  usuarioentidades SET ? WHERE id = ?',[data, id],(Error,   usuarioentidades)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(  usuarioentidades); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM  usuarioentidades WHERE ID= ?',[data],(Error,   usuarioentidades)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;