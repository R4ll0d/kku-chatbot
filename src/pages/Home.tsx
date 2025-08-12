import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import SideBar from "../components/SideBar";
import { useState } from "react";
import {
  RiBookOpenLine,
  RiMap2Line,
  RiCalendarLine,
  RiGraduationCapLine,
  RiGroupLine,
  RiAddLine,
  RiMicLine,
} from "react-icons/ri";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "การศึกษา",
      description: "หลักสูตร วิชาเรียน การสอบ",
      icon: RiBookOpenLine,
    },
    {
      id: 2,
      title: "สถานที่",
      description: "อาคาร ห้องเรียน สิ่งอำนวยความสะดวก",
      icon: RiMap2Line,
    },
    {
      id: 3,
      title: "กิจกรรม",
      description: "กิจกรรมมหาวิทยาลัย งานต่างๆ",
      icon: RiCalendarLine,
    },
    {
      id: 4,
      title: "วิชาการ",
      description: "วิจัย โครงการ ทุนการศึกษา",
      icon: RiGraduationCapLine,
    },
    {
      id: 5,
      title: "ชุมชน",
      description: "ชมรม องค์กรนิสิต",
      icon: RiGroupLine,
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState(0);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#424242" }}>
              KKU Chatbot
            </Typography>
          </Box>

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: 2,
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

            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#424242",
                  mb: 2,
                }}
              >
                Category
              </Typography>
            </Box>
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
                      {category.icon && (
                        <category.icon size={30} color="#424242" />
                      )}
                      <Typography variant="body1" sx={{ mb: 3 }}>
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              gap: 1,
              mt: 5,
            }}
          >
            <TextField
              variant="outlined"
              fullWidth
              placeholder=" Type your message"
              slotProps={{
                input: {
                  startAdornment: (
                    <IconButton>
                      <RiAddLine />
                    </IconButton>
                  ),
                  endAdornment: (
                    <IconButton>
                      <RiMicLine />
                    </IconButton>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 5,
                  "& fieldset": {
                    borderColor: "gray",
                    borderWidth: 1,
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                    borderWidth: 1,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                    borderWidth: 1,
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
