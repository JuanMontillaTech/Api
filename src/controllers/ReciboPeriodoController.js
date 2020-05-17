const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM  reciboperido',(Error,   reciboperido)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(  reciboperido);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM  reciboperido WHERE id = ?',[id],(Error,   reciboperido)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(  reciboperido);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO  reciboperido SET ?',[data],(Error,   reciboperido)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(  reciboperido);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE  reciboperido SET ? WHERE id = ?',[data, id],(Error,   reciboperido)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(  reciboperido); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM  reciboperido WHERE ID= ?',[data],(Error,   reciboperido)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;