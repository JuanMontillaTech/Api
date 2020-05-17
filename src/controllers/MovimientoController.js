const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
  conn.query('SELECT * FROM Movimiento',(Error,Movimiento)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json( Movimiento);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
     const {id} = req.params;
     conn.query('SELECT * FROM Movimiento WHERE id = ?',[id],(Error,Movimiento)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json( Movimiento);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
  const data = req.body;
    req.getConnection((erro,conn)=>{
     conn.query('INSERT INTO Movimiento SET ?',[data],(Error,Movimiento)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json( Movimiento);
   
        });
    });
   };

 controlle.update=(req, res)=>{
 const data = req.body;
 const {id} = req.params;
   req.getConnection((erro,conn)=>{
    conn.query('UPDATE Movimiento SET ? WHERE id = ?',[data, id],(Error,Movimiento)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json( Movimiento); 
       });
   });
  };


 controlle.delete=(req, res)=>{
 const data = req.params.id;
   req.getConnection((erro,conn)=>{
    conn.query('DELETE FROM Movimiento WHERE ID= ?',[data],(Error,Movimiento)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;