import React, { useState } from "react";
import { Card, Typography, Grid, Box, IconButton, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Folder } from "@mui/icons-material";

const Quiz = ({
  title,
  plays,
  questions,
  status,
  id,
  folderName,
  coverImage,
  onDoubleClick,
  onDelete,
  onEdit,
  onMove,
  onPlay,
  menuItems,
  MoveQuizModelComponent,
  ActionItemsComponent,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMove = () => {
    onMove(id);
    setIsOpen(true);
    handleClose();
  };

  const defaultMenuItems = [
    {
      name: "Edit",
      onClick: () => {
        onEdit(id);
        handleClose();
      },
    },
    { name: "Move", onClick: handleMove },
    {
      name: "Delete",
      onClick: () => {
        onDelete(id);
        handleClose();
      },
    },
  ];

  const filteredMenuItems =
    menuItems ||
    (status === "DRAFT"
      ? defaultMenuItems.filter(
          (item) => item.name === "Edit" || item.name === "Delete"
        )
      : defaultMenuItems);

  return (
    <Card
      sx={{
        padding: "10px",
        margin: "12px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
        borderRadius: "8px",
      }}
      onDoubleClick={() => onDoubleClick(id)}>
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid item display="flex">
          <Box
            component="img"
            sx={{
              height: "66px",
              width: "103px",
              borderRadius: "8px",
              objectFit: "cover",
              marginRight: "16px",
            }}
            alt={title}
            src={coverImage}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
              }}>
              {title}
              {status === "DRAFT" && (
                <Box
                  component="span"
                  sx={{
                    marginLeft: "8px",
                    fontSize: "12px",
                    color: "#000000",
                    backgroundColor: "#FEF3E7",
                    borderRadius: "4px",
                    padding: "2px 8px",
                  }}>
                  {status}
                </Box>
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "#71717A",
                display: "flex",
                alignItems: "center",
              }}>
              {plays || "0"} Plays | {questions || "0"} Questions
              {folderName && (
                <>
                  <Folder
                    sx={{ fontSize: 16, marginLeft: "8px", marginRight: "4px" }}
                  />
                  {folderName}
                </>
              )}
            </Typography>
          </Box>
        </Grid>
        <Grid item display="flex" alignItems="center">
          {status !== "DRAFT" && (
            <Button
              variant="contained"
              onClick={() => onPlay(id)}
              sx={{
                backgroundColor: "#FEF3E7",
                color: "#E93E3A",
                textTransform: "none",
                marginRight: "12px",
                padding: "4px 16px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#FEE7D3",
                },
              }}>
              Play
            </Button>
          )}
          <IconButton
            aria-label="settings"
            onClick={handleClick}
            sx={{ padding: 0 }}>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
      {ActionItemsComponent && (
        <ActionItemsComponent
          anchorEl={anchorEl}
          handleClose={handleClose}
          menuItems={filteredMenuItems}
        />
      )}
      {MoveQuizModelComponent && (
        <MoveQuizModelComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </Card>
  );
};

export default Quiz;
