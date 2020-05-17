const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
  conn.query('SELECT * FROM catalgotransacciones',(Error,catalgotransacciones)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json( catalgotransacciones);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
     const {id} = req.params;
     conn.query('SELECT * FROM catalgotransacciones WHERE id = ?',[id],(Error,catalgotransacciones)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json( catalgotransacciones);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
  const data = req.body;
    req.getConnection((erro,conn)=>{
     conn.query('INSERT INTO catalgotransacciones SET ?',[data],(Error,catalgotransacciones)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json( catalgotransacciones);
   
        });
    });
   };

 controlle.update=(req, res)=>{
 const data = req.body;
 const {id} = req.params;
   req.getConnection((erro,conn)=>{
    conn.query('UPDATE catalgotransacciones SET ? WHERE id = ?',[data, id],(Error,catalgotransacciones)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json( catalgotransacciones); 
       });
   });
  };


 controlle.delete=(req, res)=>{
 const data = req.params.id;
   req.getConnection((erro,conn)=>{
    conn.query('DELETE FROM catalgotransacciones WHERE ID= ?',[data],(Error,catalgotransacciones)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;