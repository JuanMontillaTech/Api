const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM   semestre',(Error,    semestre)=>{
        if (Error) {
            res.json(Error);
                        
        }
    
      res.json(   semestre);

     });
 });
};

controlle.select = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM   semestre WHERE id = ?',[id],(Error,    semestre)=>{
           if (Error) {
               res.json(Error);
                           
           }
           
           res.json(   semestre);
       
   
        });
    });
   };
     
controlle.create=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO   semestre SET ?',[data],(Error,    semestre)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.json(   semestre);
   
        });
    });
   };

 controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE   semestre SET ? WHERE id = ?',[data, id],(Error,    semestre)=>{
          if (Error) {
              res.json(Error);          
          }
          res.json(   semestre); 
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM   semestre WHERE ID= ?',[data],(Error,    semestre)=>{
          if (Error) {
              res.json(Error);
                          
          }  
  
       });
   });
  };


module.exports = controlle;