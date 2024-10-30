import { useEffect, useState } from 'react';
import { Sidebar } from '../Components/sidebar';
import PagesContainer from './PagesContainer';
import MainLayout from '../layout/MainLayout';
import { Page } from '../Components/pages';
import useMediaQuery from '@mui/material/useMediaQuery';
import SidebarContainer from './SidebarContainer';
import MainContext from "../context";
import { DrawerActionButton } from '../Components/drawer';
import SiwpeableViews from "react-swipeable-views";
import { Home, About, Resume, Courses, Comments, Contact } from "../pages";
import { useTheme } from '@mui/material/styles';

function AppContainer() {

  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
    console.log(prefersDarkMode)
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp])

  const handlePageNumber = (event, newValue) => {
    console.log("pagenumber event", event);
    console.log("pagenumber", newValue);
    setPageNumber(newValue);
  }

  const handlePageChange = index => {
    setPageNumber(index);
  }

  const handleThemeChange = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  }

  return (
    <MainContext.Provider value={{ pageNumber, handleThemeChange, handlePageNumber, drawerOpen, setDrawerOpen }}>
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SiwpeableViews
            index={pageNumber}
            onChangeIndex={handlePageChange}
          >
            <Page value={pageNumber} index={0}>
              <Home helmetTitle="وبسایت شخصی | صفحه اصلی" />
            </Page>
            <Page value={pageNumber} index={1}>
              <About helmetTitle="وبسایت شخصی | درباره من" />
            </Page>
            <Page value={pageNumber} index={2}>
              <Resume helmetTitle="وبسایت شخصی | رزومه من" />
            </Page>
            <Page value={pageNumber} index={3}>
              <Courses helmetTitle=" وبسایت شخصی | دوره های من" />
            </Page>
            <Page value={pageNumber} index={4}>
              <Comments helmetTitle="وبسایت شخصی | نظرات دانشجویان" />
            </Page>
            <Page value={pageNumber} index={5}>
              <Contact helmetTile=" وبسایت شخصی | ارتباط با من" />
            </Page>
          </SiwpeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;

