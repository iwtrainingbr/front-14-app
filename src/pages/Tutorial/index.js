import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./styles.css";
import imgWelcome from "./images/welcome.png";
import imgOrganize from "./images/organize.png";
import imgReady from "./images/ready.png";
import imgControl from "./images/control.png";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      label: 'Bem-Vindo',
      imgPath: imgWelcome,
      messageTutorial: 'Seja bem-vindo ao nosso sistema de finanças! Aqui, você poderá organizar sua vida financeira de maneira fácil e rápida.',
    },
    {
      label: 'Sem descontrole Financeiro!',
      imgPath: imgControl,
      messageTutorial: 'Tenha controle sobre suas finanças e dicas sobre organização financeira.',
    },
    {
      label: 'Organize suas Despesas',
      imgPath: imgOrganize,
      messageTutorial: 'Organize suas despesas de forma rápido e fácil.',
    },
    {
      label: 'Está pronto? Então vamos lá!',
      imgPath: imgReady,
      messageTutorial: 'Então, aproveite nosso app e se tiver dúvida, contate-nos.',
    },
  ];

export default function Tutorial() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    return (
      <Box sx={{flexGrow: 1 }}>
        <Paper
          className='titulo'
          square
          elevation={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 20,
            pl: 2,
            bgcolor: '#088928',
            color: 'white',
          }}
        >
          <Typography variant='h8'>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
              <p className='messageTutorial'>{step.messageTutorial}</p>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          className='mobileStepper'
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              color='success'
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Próximo
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button color='success' size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Anterior
            </Button>
          }
        />
      </Box>
    );
}