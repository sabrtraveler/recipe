import React, { useContext } from "react";
import Store from "../utils/Store";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import MoreIcon from "@mui/icons-material/MoreVert";
import NextLink from "next/link";
import SearchBar from "../components/SearchBar";

export default function TopBar({ nosearch }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        "& .MuiMenu-list": {},
      }}
    >
      <NextLink href="/" passHref>
        <MenuItem sx={{ pl: 0, py: 0 }}>
          <IconButton size="large" color="inherit">
            <HomeIcon />
          </IconButton>
          <p>Homepage</p>
        </MenuItem>
      </NextLink>
      <NextLink href="/favorites" passHref>
        <MenuItem sx={{ pl: 0 }}>
          <IconButton size="large" color="inherit">
            <StarIcon />
          </IconButton>
          <p>Favorites</p>
        </MenuItem>
      </NextLink>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, position: "relative", minHeight: "48px" }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link sx={{ textDecoration: "none" }}>
              <Typography
                noWrap
                component="div"
                color="primary.dark"
                sx={{
                  display: { xs: nosearch ? "block" : "none", sm: "block" },
                  fontFamily: "Your Dream",
                  fontSize: { xs: 35, sm: 50 },
                  lineHeight: 0.8,
                }}
              >
                Recipe Book
              </Typography>
            </Link>
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 2, display: nosearch ? "none" : "block" }}>
            <SearchBar />
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              minWidth: 140,
              justifyContent: "right",
            }}
          >
            <NextLink href="/favorites" passHref>
              <IconButton size="large" color="inherit">
                <StarIcon />
              </IconButton>
            </NextLink>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
