import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const TabBar = ({ tabsData, value, onTabChange }) => {
    const handleChange = (event, newValue) => {
        onTabChange(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="custom tabs example"
                sx={{
                    minHeight: "40px",
                    "& .MuiTabs-indicator": {
                        display: "none",
                    },
                }}
            >
                {tabsData?.map((tab) => (
                    <Tab
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                        sx={{
                            minHeight: "40px",
                            padding: "10px 16px",
                            border: "1px solid #E5E7EB",
                            borderRadius: "4px ",
                            marginRight: "2px",
                            fontSize: "14px",
                            fontWeight: 500,
                            textTransform: "none",
                            color: value === tab.value ? "#000000" : "#6B7280",
                            backgroundColor: value === tab.value ? "#71717A" : "#FFFFFF",
                            "&:hover": {
                                backgroundColor: value === tab.value ? "#71717A" : "#FFFFFF",
                            },
                            "&.Mui-selected": {
                                color: "#FFFFFF",
                            },
                        }}
                    />
                ))}
            </Tabs>
            <Box sx={{ pt: 2 }}>
                {tabsData?.map((tab) => (
                    <Box
                        key={tab.value}
                        role="tabpanel"
                        hidden={value !== tab.value}
                        id={`tabpanel-${tab.value}`}
                        aria-labelledby={`tab-${tab.value}`}
                    >
                        {value === tab.value && tab.content}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TabBar;