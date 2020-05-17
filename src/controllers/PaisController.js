const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM pais',(Error,pais)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(pais);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM pais WHERE id = ?',[id],(Error,pais)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(pais);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO pais SET ?',[data],(Error,pais)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(pais);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE pais SET ? WHERE id = ?',[data, id],(Error,pais)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(pais); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM pais WHERE ID= ?',[data],(Error,pais)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;