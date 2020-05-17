const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM  entidades',(Error,   entidades)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(  entidades);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM  entidades WHERE id = ?',[id],(Error,   entidades)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(  entidades);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO  entidades SET ?',[data],(Error,   entidades)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(  entidades);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE  entidades SET ? WHERE id = ?',[data, id],(Error,   entidades)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(  entidades); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM  entidades WHERE ID= ?',[data],(Error,   entidades)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;