import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovies, { Movie } from "../hooks/useMovies";
import MovieGrid from "./MovieGrid";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedCvv, setSelectedCvv] = useState("");

  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const handleWatchTrailer = () => {
    setSelectedVideoUrl(
      "https://www.youtube.com/embed/yzRhB3wVU5U?si=wol4isxRvcyuKG3B"
    );
    setIsTrailerModalOpen(true);
  };

  const handleCloseTrailerModal = () => {
    setSelectedVideoUrl("");
    setIsTrailerModalOpen(false);
  };

  const isFormValid =
  selectedCvv.trim() !== "" &&
  selectedDate.trim() !== "" &&
  expirationDate.trim() !== "" &&
  selectedTime.trim() !== "" &&
  selectedNumber.trim() !== "";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://ghibliapi.vercel.app/films/${id}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const duration = movieDetails?.running_time;

  const convert = (duration: any) => {
    const hours = Math.floor(duration / 60);
    const remainingMinutes = duration % 60;

    return `${hours}h: ${remainingMinutes}m: 00s`;
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = useState(<OverlayOne />);

  const handleBuyButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNumberOfTickets(1);
    setSelectedDate("");
    setSelectedTime("");
    setExpirationDate("");
    setSelectedNumber("");
    setSelectedCvv("")
    
    
  };

  const handleNumberOfTicketsChange = (value: string) => {
    setNumberOfTickets(parseInt(value));
  };

  const ticket = numberOfTickets == 1 ? 'ticket' : 'tickets' ;
    
  


  const handleFormSubmit = () => {
    console.log("Succes");
    handleCloseModal();
    alert(`Congratulations! You just bought ${numberOfTickets} ${ticket}.`);
   
  };

  return (
    <div>
      <Grid
        padding={5}
        bg={movieDetails?.movie_banner}
        templateAreas={{
          lg: ` "aside main" "footer footer" `,
        }}
      >
        <GridItem marginRight={5} area="aside">
          <Image borderRadius={30} height="500px" src={movieDetails?.image} />
        </GridItem>
        <VStack>
          <GridItem area="main">
            <Text fontSize="2xl">
              {movieDetails?.title} ({movieDetails?.release_date})
            </Text>
          </GridItem>
          <GridItem area="main">
            <Text>{movieDetails?.description}</Text>
          </GridItem>
          <GridItem area="main">
            <Text>Original title: {movieDetails?.original_title}</Text>
          </GridItem>
          <GridItem area="main">
            <Text>Director: {movieDetails?.director}</Text>
          </GridItem>

          <GridItem area="main">
            <Text>Rating: {movieDetails?.rt_score} </Text>
          </GridItem>

          <GridItem area="main">
            <Text>Duration: {convert(duration)}</Text>
          </GridItem>
          <GridItem area="main">
            <Text>Price: 700 Leke</Text>
          </GridItem>
        </VStack>

        <GridItem area="footer" p={50}>
          <HStack justifyContent="space-between" paddingInline={100}>
            <Button
              bg="green"
              onClick={() => {
                setOverlay(<OverlayOne />);
                handleWatchTrailer();
              }}
            >
              Watch The Trailers
            </Button>
            <Button
              bg="green"
              width="110px"
              onClick={() => {
                setOverlay(<OverlayOne />);
                handleBuyButtonClick();
              }}
            >
              Buy Tickets
            </Button>
          </HStack>
        </GridItem>
      </Grid>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy Tickets For: {movieDetails?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Number of Tickets (max 5 tickets)</FormLabel>
                <NumberInput
                  defaultValue={numberOfTickets}
                  min={1}
                  max={5}
                  onChange={handleNumberOfTicketsChange}
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Date of Show</FormLabel>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Time</FormLabel>
                <Select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Select a time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Credit Card Number</FormLabel>
                <Input type="text" placeholder="Card Number" value={selectedNumber}
                  onChange={(e) => setSelectedNumber(e.target.value)}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>CVV</FormLabel>
                <Input type="text" placeholder="CVV" value={selectedCvv}
                  onChange={(e) => setSelectedCvv(e.target.value)}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Expiration Date</FormLabel>
                <Input
                  type="date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Total Amount</FormLabel>
                <Input
                  type="text"
                  value={`${numberOfTickets * 700} Leke`}
                  isReadOnly
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleFormSubmit}
              
              isDisabled={!isFormValid}
            >
              Submit
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isTrailerModalOpen}
        onClose={handleCloseTrailerModal}
        size="xl"
      >
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Watch All Our Movies</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedVideoUrl && (
              <iframe
                width="100%"
                height="400"
                src={selectedVideoUrl}
                title="YouTube Video Player"
                allowFullScreen
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseTrailerModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MovieDetails;
