import React, { Fragment, useState } from "react";
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Add,
  ExpandMore,
  ExpandLess,
  ChevronLeft,
  ChevronRight,
  Search,
} from "@mui/icons-material";

const Sidebar = ({
  menuItems = [],
  folderSections = [],
  onTabClick,
  onFolderClick,
  onAddFolder,
  customStyles = {},
  logo,
  showSearch = false,
  onSearch,
}) => {
  const [selectedTab, setSelectedTab] = useState("");
  const [expandedSections, setExpandedSections] = useState({});
  const [addingFolder, setAddingFolder] = useState({});
  const [newFolderNames, setNewFolderNames] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [folders, setFolders] = useState(
    folderSections.reduce((acc, section) => {
      acc[section.id] = section.folders;
      return acc;
    }, {})
  );

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    onTabClick(tabId);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleAddFolder = (sectionId) => {
    setAddingFolder((prev) => ({ ...prev, [sectionId]: true }));
  };

  const handleAddNewFolder = (sectionId) => {
    if (newFolderNames[sectionId]?.trim()) {
      const newFolder = {
        id: Date.now(),
        name: newFolderNames[sectionId].trim(),
      };
      setFolders((prev) => ({
        ...prev,
        [sectionId]: [...(prev[sectionId] || []), newFolder],
      }));
      onAddFolder(sectionId, newFolder);
      setNewFolderNames((prev) => ({ ...prev, [sectionId]: "" }));
      setAddingFolder((prev) => ({ ...prev, [sectionId]: false }));
    }
  };

  const handleCancelAddFolder = (sectionId) => {
    setNewFolderNames((prev) => ({ ...prev, [sectionId]: "" }));
    setAddingFolder((prev) => ({ ...prev, [sectionId]: false }));
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const SidebarButton = ({ icon, text, isSelected, onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: isExpanded ? "8px 16px" : "8px",
        cursor: "pointer",
        backgroundColor: isSelected
          ? customStyles.selectedBgColor || "#71717A"
          : customStyles.bgColor || "#FFFFFF",
        color: isSelected
          ? customStyles.selectedColor || "#FFFFFF"
          : customStyles.color || "#000000",
        borderRadius: "4px",
        marginBottom: "8px",
        justifyContent: isExpanded ? "flex-start" : "center",
        ...customStyles.button,
      }}>
      {icon}
      {isExpanded && (
        <Typography sx={{ marginLeft: "8px", ...customStyles.buttonText }}>
          {text}
        </Typography>
      )}
    </Box>
  );

  const renderFolderSection = (section) => {
    return (
      <List
        key={section.id}
        sx={{
          backgroundColor: customStyles.foldersBgColor || "#FEF3E7",
          padding: 1,
          borderRadius: 1,
          ...customStyles.foldersList,
        }}>
        <ListItem sx={{ padding: "0 0 0 16px", ...customStyles.foldersHeader }}>
          <ListItemText
            primary={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleSection(section?.id)}>
                  {expandedSections[section?.id] ? (
                    <ExpandLess
                      sx={{ color: customStyles.iconColor || "#E93E3A" }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{ color: customStyles.iconColor || "#E93E3A" }}
                    />
                  )}
                  <Typography sx={{ marginLeft: 1 }}>{section.text}</Typography>
                </Box>
                <IconButton onClick={() => handleAddFolder(section.id)}>
                  <Add sx={{ color: customStyles.iconColor || "#E93E3A" }} />
                </IconButton>
              </Box>
            }
          />
        </ListItem>

        <Collapse
          in={expandedSections[section?.id]}
          timeout="auto"
          unmountOnExit>
          {folders[section?.id]?.map((folder) => (
            <ListItem
              key={folder.id}
              sx={{
                backgroundColor: "#FEF3E7",
                cursor: "pointer",
                ...customStyles.folderItem,
              }}
              onClick={() => onFolderClick(section.id, folder.id)}>
              {section.folderIcon}
              <ListItemText primary={folder.name} />
            </ListItem>
          ))}
        </Collapse>

        {addingFolder[section?.id] && (
          <TextField
            value={newFolderNames[section?.id] || ""}
            onChange={(e) =>
              setNewFolderNames((prev) => ({
                ...prev,
                [section.id]: e.target.value,
              }))
            }
            onBlur={() => handleCancelAddFolder(section.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddNewFolder(section.id);
              if (e.key === "Escape") handleCancelAddFolder(section.id);
            }}
            autoFocus
            size="small"
            placeholder="Folder name"
            sx={{ marginTop: 1, ...customStyles.newFolderInput }}
          />
        )}
      </List>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        ...customStyles.container,
      }}>
      <Paper
        sx={{
          width: isExpanded ? 240 : 60,
          padding: 2,
          backgroundColor: customStyles.paperBgColor || "#FFFFFF",
          borderRight: "1px solid #e0e0e0",
          borderRadius: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "width 0.3s",
          overflow: "hidden",
          ...customStyles.paper,
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            marginBottom: 2,
          }}>
          {isExpanded && (
            <img
              src={logo}
              alt="Logo"
              style={{ maxHeight: 40, maxWidth: 190 }}
            />
          )}
          <IconButton onClick={toggleSidebar} sx={{ marginLeft: "10px" }}>
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>

        {showSearch && isExpanded && (
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        )}

        <Box
          sx={{
            overflow: "auto",
            flexGrow: 1,
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "3px",
            },
          }}>
          {menuItems.map((item) => (
            <Fragment key={item.id}>
              <SidebarButton
                icon={item.icon}
                text={item.text}
                isSelected={selectedTab === item.id}
                onClick={() => handleTabClick(item.id)}
              />
              {isExpanded &&
                folderSections.find(
                  (section) => section.menuItemId === item.id
                ) && (
                  <Collapse
                    in={selectedTab === item.id}
                    timeout="auto"
                    unmountOnExit>
                    {renderFolderSection(
                      folderSections.find(
                        (section) => section.menuItemId === item.id
                      )
                    )}
                  </Collapse>
                )}
            </Fragment>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Sidebar;
