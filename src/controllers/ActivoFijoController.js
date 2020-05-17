const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM   activofijo',(Error,    activofijo)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(   activofijo);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM   activofijo WHERE id = ?',[id],(Error,    activofijo)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(   activofijo);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO   activofijo SET ?',[data],(Error,    activofijo)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(   activofijo);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE   activofijo SET ? WHERE id = ?',[data, id],(Error,    activofijo)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(   activofijo); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM   activofijo WHERE ID= ?',[data],(Error,    activofijo)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;