import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

export default function Cards({ heros }) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {heros.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={card.thumbnail.path + "." + card.thumbnail.extension}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Detalhes</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
