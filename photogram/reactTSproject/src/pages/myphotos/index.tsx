import Layout from "@/components/layout";
import { useUserAuth } from "@/context/userAuthContext";
import { getPostByUserId } from "@/repository/post.service";
import { DocumentResponse, Post } from "@/types";
import { HeartIcon } from "lucide-react";
import * as React from "react";
import { Box, Typography, Grid, Card, CardMedia, Stack } from "@mui/material";

interface IMyPhotosProps {}

const MyPhotos: React.FunctionComponent<IMyPhotosProps> = () => {
  const { user } = useUserAuth();
  const [data, setData] = React.useState<DocumentResponse[]>([]);

  const getAllPost = async (id: string) => {
    try {
      const querySnapshot = await getPostByUserId(id);
      const tempArr: DocumentResponse[] = [];
      if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Post;
          const responseObj: DocumentResponse = {
            id: doc.id,
            ...data,
          };
          console.log("The response object is : ", responseObj);
          tempArr.push(responseObj);
        });
        setData(tempArr);
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (user != null) {
      getAllPost(user.uid);
    }
  }, []);

  const renderPost = () => {
    return data.map((item) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={item.photos[0].uuid}>
          <Card sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1, bgcolor: 'rgba(0,0,0,0.6)', borderRadius: 1, p: 1 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <HeartIcon size={16} color="white" />
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {item.likes} likes
                </Typography>
              </Stack>
            </Box>
            <CardMedia
              component="img"
              image={`${item.photos[0].cdnUrl}/-/progressive/yes/-/scale_crop/300x300/center/`}
              alt="Photo"
              sx={{ height: 300, objectFit: 'cover' }}
            />
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          My Photos
        </Typography>
        <Grid container spacing={2}>
          {data ? renderPost() : <Typography>...Loading</Typography>}
        </Grid>
      </Box>
    </Layout>
  );
};

export default MyPhotos;
