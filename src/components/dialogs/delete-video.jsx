import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { $api } from "../../utils";

export function DeleteVideo({ videoId }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleDeleteVideo = async () => {
    setLoading(true);
    try {
      const response = await $api.delete(`/videos/deleteById/${videoId}`);

      if (response.status === 200) {
        alert("Video muvaffaqiyatli o'chirildi!");
        window.location.reload();
        setOpen(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} color="red">
        Delete
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen}>
        <DialogHeader>Create Video</DialogHeader>
        <DialogBody>Rostan ham shu videoni o'chirmoqchimisan</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            disabled={loading}
            color="red"
            onClick={handleDeleteVideo}
          >
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}