import React from "react";
import {
  List,
  ListItem,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import { BASE_URL } from "../../utils/config";
import axios from "axios";
import Image from "next/image";
import FavoriteButton from "../../components/FavoriteButton";
import Layout from "../../components/Layout";
import TopBar from "../../components/TopBar";

const Recipe = ({ data }) => {
  return (
    <Layout>
      <TopBar />
      <Container maxWidth={false} sx={{ maxWidth: 800, pt: 3, pb: 5 }}>
        <Typography component="h1" variant="h2" align="center">
          {data.title}
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={10}>
            <Image
              src={data.image}
              alt={data.title}
              width={720}
              height={500}
              layout="responsive"
            ></Image>
            <Box
              sx={{
                pt: 3,
                pb: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FavoriteButton id={data.id} title={data.title} />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ pl: { sm: 7 } }}>
          <List>
            <ListItem>
              <Typography component="h4" variant="h4">
                Ingredients
              </Typography>
            </ListItem>
            {data?.extendedIngredients.map((ing) => {
              return <ListItem key={ing.id}>{ing.original}</ListItem>;
            })}
          </List>
          <List>
            <ListItem>
              <Typography component="h4" variant="h4">
                Instructions
              </Typography>
            </ListItem>
            {data?.analyzedInstructions.map((section) => {
              return section.steps.map((step, i) => {
                return (
                  <ListItem key={i}>
                    <Typography>
                      {i + 1} - {step.step}
                    </Typography>
                  </ListItem>
                );
              });
            })}
          </List>
        </Box>
      </Container>
    </Layout>
  );
};

export default Recipe;

export async function getServerSideProps(context) {
  let result;
  const { params } = context;
  const { id } = params;

  const url = `${BASE_URL}/${id}/information`;
  const options = {
    params: {
      apiKey: process.env.API_KEY,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(url, options);
  result = data;

  return {
    props: {
      data: result,
    },
  };
}
