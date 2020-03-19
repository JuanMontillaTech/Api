const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM Usuario',(Error, Usuarios)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(Usuarios);

     });
 });
};


controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM Usuario WHERE id = ?',[id],(Error, Usuarios)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(Usuarios);
       
   
        });
    });
   };
   
 




controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO Usuario SET ?',[data],(Error, Usuarios)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(Usuarios);
   
        });
    });
   };

   controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE Usuario SET ? WHERE id = ?',[data, id],(Error, Usuarios)=>{
          if (Error) {
              res.json(Error);
                          
          }
          res.json(Usuarios);
           
  
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM Usuario WHERE ID= ?',[data],(Error, Usuarios)=>{
          if (Error) {
              res.json(Error);
                          
          }
       
           
  
       });
   });
  };


module.exports = controlle;