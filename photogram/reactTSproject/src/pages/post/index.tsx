import FileUploader from "@/components/fileUploader";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserAuth } from "@/context/userAuthContext";
import { createPost } from "@/repository/post.service";
import { FileEntry, PhotoMeta, Post } from "@/types";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Stack } from "@mui/material";

interface ICreatePostProps {}

const CreatePost: React.FunctionComponent<ICreatePostProps> = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const [fileEntry, setFileEntry] = React.useState<FileEntry>({
    files: [],
  });
  const [post, setPost] = React.useState<Post>({
    caption: "",
    photos: [],
    likes: 0,
    userlikes: [],
    userId: null,
    date: new Date(),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Uploaded File Entry : ", fileEntry.files);
    console.log("The create post is : ", post);
    const photoMeta: PhotoMeta[] = fileEntry.files
      .filter((file) => file.cdnUrl && file.uuid)
      .map((file) => {
        return { cdnUrl: file.cdnUrl as string, uuid: file.uuid as string };
      });
    if (user != null) {
      const newPost: Post = {
        ...post,
        userId: user?.uid || null,
        photos: photoMeta,
      };
      console.log("The final posy is  : ", newPost);
      await createPost(newPost);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <Paper sx={{ maxWidth: 'md', width: '100%', border: 1, borderColor: 'divider' }}>
          <Box sx={{ bgcolor: 'grey.800', color: 'white', textAlign: 'center', fontSize: '1.125rem', p: 2 }}>
            <Typography variant="h5" component="h3">
              Create Post
            </Typography>
          </Box>
          <Box sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Box>
                  <Label htmlFor="caption">
                    Photo Caption
                  </Label>
                  <Textarea
                    id="caption"
                    placeholder="what's in your photo!"
                    value={post.caption}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setPost({ ...post, caption: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <Label htmlFor="photo">
                    Photos
                  </Label>
                  <FileUploader fileEntry={fileEntry} onChange={setFileEntry} />
                </Box>
                <Button type="submit" fullWidth>
                  Post
                </Button>
              </Stack>
            </form>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default CreatePost;
