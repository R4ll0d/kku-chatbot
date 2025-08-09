import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { RiBookOpenLine, RiMap2Line, RiCalendarLine, RiGraduationCapLine, RiGroupLine } from "react-icons/ri";


const Home = () => {
  const categories = [
    { id: 1, title: "การศึกษา", description: "หลักสูตร วิชาเรียน การสอบ", icon: RiBookOpenLine },
    { id: 2, title: "สถานที่", description: "อาคาร ห้องเรียน สิ่งอำนวยความสะดวก", icon: RiMap2Line },
    { id: 3, title: "กิจกรรม", description: "กิจกรรมมหาวิทยาลัย งานต่างๆ", icon: RiCalendarLine },
    { id: 4, title: "วิชาการ", description: "วิจัย โครงการ ทุนการศึกษา", icon: RiGraduationCapLine },
    { id: 5, title: "ชุมชน", description: "ชมรม องค์กรนิสิต", icon: RiGroupLine },
  ];

  const [selectedCategories, setSelectedCategories] = useState(0);

  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#424242" }}>
              CP KKU Chatbot
            </Typography>
          </Box>

          <Container
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 4,
            }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#424242" }}
              >
                Welcome
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#424242" }}
              >
                Do you need help ?
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#424242",
                textAlign: "center",
                mb: 6,
              }}
            >
              Category
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {categories.map((category, index) => (
                <Card
                  key={category.id}
                  sx={{
                    flex: "1 1 calc(20% - 16px)",
                    maxWidth: 200,
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <CardActionArea
                    onClick={() => setSelectedCategories(index)}
                    data-active={selectedCategories === index ? "" : undefined}
                    sx={{
                      height: "100%",
                      "&[data-active]": {
                        backgroundColor: "action.selected",
                        "&:hover": {
                          backgroundColor: "action.selectedHover",
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ height: "100%" }}>
                      {category.icon && <category.icon size={30} color="#424242" />}
                      <Typography variant="body1" sx={{ mb: 3}}>
                        {category.title}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {category.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Container>

          <Box>
            <TextField 
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
