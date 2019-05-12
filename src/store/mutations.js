let mutations={
  
  
  UPDATE_FOOT:(state,payload)=>{
    state.bfoot=payload
  },
  
  UPDATE_LOADING:(state,payload)=>{
    state.bLoading=payload
  },
  
  UPDATE_USER:(state,payload)=>{
    state.user=payload;
    
  },
  
  UPDATE_HOME:(state,payload)=>state.banner=payload,
 // UPDATE_FOLLOW:(state,payload)=>state.follow=payload,
  UPDATE_DETAIL:(state,payload)=>state.detail=payload,

};

export default mutations;