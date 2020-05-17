const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM  recibos_caja',(Error,   recibos_caja)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(  recibos_caja);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM  recibos_caja WHERE id = ?',[id],(Error,   recibos_caja)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(  recibos_caja);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO  recibos_caja SET ?',[data],(Error,   recibos_caja)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(  recibos_caja);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE  recibos_caja SET ? WHERE id = ?',[data, id],(Error,   recibos_caja)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(  recibos_caja); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM  recibos_caja WHERE ID= ?',[data],(Error,   recibos_caja)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;