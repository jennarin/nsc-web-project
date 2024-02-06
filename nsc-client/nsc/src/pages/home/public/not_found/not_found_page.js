import { Box } from '@mui/material';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import React from 'react'
import NavBarPublicLogin from '../../../../components/navbar/navbar_public_login';
import {useHistory} from "react-router-dom";
import { Button } from '@mui/material';

export default function NotFoundPage() {
  const history = useHistory()
  
  return (
    <div>
      <NavBarPublicLogin />
      <div>
       
          <Paper sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'white',
            minHeight: 750,

          }}>
            <Container component="main">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: 'white',
                  width: '100%',
                  mt: 2,
                  mb: 2,
                  textAlign: 'center',
                  borderRadius: 8, 
                  fontSize: 25
                  
                }}
              >
                <h1>404 Page Not Found</h1>
                            <Button variant="outlined" onClick={() => history.goBack()}>ย้อนกลับ</Button>
            </Box>
            </Container>
        </Paper>
      </div>
    </div>
  )
}
