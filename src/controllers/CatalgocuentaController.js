const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
  conn.query('SELECT * FROM catalogocuentas',(Error,catalogocuentas)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json( catalogocuentas);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
     const {id} = req.params;
     conn.query('SELECT * FROM catalogocuentas WHERE id = ?',[id],(Error,catalogocuentas)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json( catalogocuentas);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
  const data = req.body;
    req.getConnection((erro,conn)=>{
     conn.query('INSERT INTO catalogocuentas SET ?',[data],(Error,catalogocuentas)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json( catalogocuentas);
   
        });
    });
   };

 controlle.update=(req, res)=>{
 const data = req.body;
 const {id} = req.params;
   req.getConnection((erro,conn)=>{
    conn.query('UPDATE catalogocuentas SET ? WHERE id = ?',[data, id],(Error,catalogocuentas)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json( catalogocuentas); 
       });
   });
  };


 controlle.delete=(req, res)=>{
 const data = req.params.id;
   req.getConnection((erro,conn)=>{
    conn.query('DELETE FROM catalogocuentas WHERE ID= ?',[data],(Error,catalogocuentas)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;