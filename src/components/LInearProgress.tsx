import AppColors from "@/utils/AppColors";
import React from "react";
interface ProgressProps {
  bgColor?: string;
  progress?: number;
  height?: number;
}

const LinearProgress = ({ bgColor, progress, height }: ProgressProps) => {
  const ParentContainer: React.CSSProperties = {
    display: "flex",
    width: "100%",
    minWidth: 100,
    flexDirection: "column",
    alignItems: "center",
  };
  const pTag: React.CSSProperties = {
    margin: 0,
    marginBottom: 5,
    fontSize:14,
    fontWeight:500,
  };
  const Parentdiv: React.CSSProperties = {
    height: `${height || 10}px`,
    width: "100%",
    backgroundColor: AppColors.progressBG,
    borderRadius: height || 10,
  };

  const Childdiv: React.CSSProperties = {
    height: "100%",
    width: `${progress || 0}%`,
    backgroundColor: bgColor || AppColors.primaryColor,
    borderRadius: height || 10,
  };

  const progresstext: React.CSSProperties = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={ParentContainer}>
      <p style={pTag}>{progress}%</p>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext} />
        </div>
      </div>
    </div>
  );
};

export default LinearProgress;
