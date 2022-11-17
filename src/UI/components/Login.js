import React from "react";
import 'boostrap';
import Checkbox from '@mui/material/Checkbox';
'
function Login (){

    return (
       
            <div>
                <h1>MK FIX</h1>
            <h3>Inicio de sesion</h3>
            <h3>Registrarse</h3>

            
            <div>

            
                {/* <label htmlFor="numero">numero de dni</label><br/> */}
                {/* <input type="text" id="numero" name="numero" placeholder="Introduzca su N° de dni"></input> */}
                <button nombre="Numero de DNI" place="***"> login</button> 
               
            </div>
            <div>
                 <button type="submit">Aceptar</button>
                <button className="registrar-login" to="/Registro">¿no tienes cuenta? Registrate </button>
            </div>


            </div>
    )
};

export default Login;

<div>
 <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">

        <CssBaseline />
        <Box className='box'>
          <Avatar sx={{mt: 2,mb:2,bgcolor: 'success.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de Sesión
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="dni"
              label="DNI"
              name="DNI"
              autoComplete="DNI"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Contraseña"
              label="Contraseña"
              type="Contraseña"
              id="contrasenia"
              autoComplete="current-contraseña"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
        
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
            
              
                <Link href="#" variant="body2">
                  {"Nuevo usuario? Registarse"}
                </Link>
            
        
          </Box>
        </Box>
        <Copyright sx={{ mt: 7, mb: 4 }}></Copyright>
    
    </ThemeProvider>
  );
}
</div>