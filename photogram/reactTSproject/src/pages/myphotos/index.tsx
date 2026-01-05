import Layout from "@/components/layout";
import { useUserAuth } from "@/context/userAuthContext";
import { getPostByUserId } from "@/repository/post.service";
import { DocumentResponse, Post } from "@/types";
import { HeartIcon } from "lucide-react";
import * as React from "react";

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
        <div key={item.photos[0].uuid}>
          <div>
            <div>
              <HeartIcon />
              <div>
                {item.likes} likes
              </div>
            </div>
          </div>
          <img
            src={`${item.photos[0].cdnUrl}/-/progressive/yes/-/scale_crop/300x300/center/`}
          />
        </div>
      );
    });
  };

  return (
    <Layout>
      <div>
        <div>
          <h3>
            My Photos
          </h3>
          <div>
            <div>
              {data ? renderPost() : <div>...Loading</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPhotos;
