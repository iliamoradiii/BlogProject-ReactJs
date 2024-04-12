import React, { useState } from 'react'

import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../../graphql/mutations';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentForm({slug}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const [sendComment, {loading, data, errors}] = useMutation(SEND_COMMENT, {
        variables:{name, email, text, slug}
    })

    
    
    console.log(data)
    const sendHandler = () => {
        if(name && email){
            if(text.length >= 15){
                sendComment();
            }else{
                toast.warn("کامنت باید بیشتر از 15 حرف باشد", {
                    position:"top-center"
                });
            }
        }else{
            toast.warn("لطفا تمام فیلد ها را پر کنید", {
                position:"top-center"
            });
        }
    }

    if(data){
        toast.success("کامنت ارسال شد و منتظر تایید میباشد",{position:"top-center"})
    }
  return (
    <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py:1, mt:5, padding:1.5}}>

        <Grid item xs={12} mt={2}>
            <Typography component="p" variant='h6' fontWeight={700} color="primary">
                ارسال کامنت
            </Typography>
        </Grid>

        <Grid item xs={12} mt={2}>
            <TextField id="outlined-basic" label="نام کاربری" variant="outlined" sx={{width:"100%"}} value={name} onChange={(e) => setName(e.target.value.replace(/^\s+|\s+$/g, "")) }/> {/* clears the spaces */}
        </Grid>
        <Grid item xs={12} mt={2}>
            <TextField id="outlined-basic" label="ایمیل" variant="outlined" sx={{width:"100%"}} value={email} onChange={(e) => setEmail(e.target.value.replace(/^\s+|\s+$/g, "")) }/> {/* clears the spaces */}
        </Grid>
        <Grid item xs={12} mt={2}>
            <TextField id="outlined-basic" label="متن کامنت" variant="outlined" sx={{width:"100%"}} value={text} onChange={(e) => setText(e.target.value) } multiline minRows={4}/>
        </Grid>
        <Grid item xs={12} mt={2}>
            { loading ? (
                <Button variant="contained" disabled>درحال ارسال</Button>
            ):(
                <Button variant="contained" onClick={sendHandler}>ارسال</Button>
            )}
            <ToastContainer />
        </Grid>
    </Grid>
  )
}

export default CommentForm
