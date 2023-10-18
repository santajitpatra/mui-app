import { Button, Container, Typography, TextField } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';


export default function Create() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

 
  const handleSubmit = (e: any) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }
    if (title && details) {
      console.log(title, details)
    }
  }
    return (
      <Container maxWidth="sm" >
        <Typography variant='h6' component={"h2"} gutterBottom color={"textSecondary"} >
          Create a new note
        </Typography>

        <form action="" noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id=""
            label="Note Title"

            required
            fullWidth
            color='secondary'
            error={detailsError}

          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            id=""
            label="Details"

            required
            fullWidth
            multiline
            rows={4}
            color='secondary'
            error={detailsError}

          />
          <Button
            type='submit' variant="contained" color='secondary' endIcon={<KeyboardArrowRightIcon />} >
            Submit
          </Button>
        </form>

      </Container>
    )
  }

