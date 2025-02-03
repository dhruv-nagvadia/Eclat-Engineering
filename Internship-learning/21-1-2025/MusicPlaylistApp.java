import java.util.ArrayList;
import java.util.Scanner;

class Song {
    public String title;
    public String artist;
    public double duration;

    public Song(String title, String artist, double duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "Title: " + title + ", Artist: " + artist + ", Duration: " + duration + " minutes";
    }

    public String getTitle() {
        return title;
    }

    public double getDuration() {
        return duration;
    }
}

class Playlist {
    public String name;
    public ArrayList<Song> songs;

    public Playlist(String name) {
        this.name = name;
        this.songs = new ArrayList<>();
    }

    public void addSong(Song song) {
        songs.add(song);
    }

    public boolean removeSong(String title) {
        for (Song song : songs) {
            if (song.getTitle().toLowerCase().equals(title.toLowerCase())) {
                songs.remove(song);
                return true;
            }
        }
        return false;
    }

    public void displaySongs() {
        if (songs.isEmpty()) {
            System.out.println("The playlist is empty.");
        } else {
            for (Song song : songs) {
                System.out.println(song);
            }
        }
    }

    public void searchSong(String title) {
        boolean found = false;
        for (Song song : songs) {
            if (song.getTitle().toLowerCase().equals(title.toLowerCase())) {
                System.out.println(song);
                found = true;
            }
        }
        if (!found) {
            System.out.println("Song not found.");
        }
    }

    public double TotalDuration() {
        double totalDuration = 0;
        for (Song song : songs) {
            totalDuration += song.getDuration();
        }
        return totalDuration;
    }
}

public class MusicPlaylistApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Playlist playlist = new Playlist("Playlist");
        boolean isFirstTime=true;
        while (true) {
            if (isFirstTime) {
                System.out.println("\nMusic Playlist Application");
                System.out.println("1. Add a new song to the playlist");
                System.out.println("2. Remove a song from the playlist");
                System.out.println("3. Display all songs in the playlist");
                System.out.println("4. Search for a song by title");
                System.out.println("5. Display total duration of the playlist");
                System.out.println("6. Exit");
                isFirstTime = false; // Set it to false after the first display
            }
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();  

            switch (choice) {
                case 1: 
                    System.out.print("Enter song title: ");
                    String title = scanner.nextLine();
                    System.out.print("Enter artist name: ");
                    String artist = scanner.nextLine();
                    System.out.print("Enter song duration (in minutes): ");
                    double duration = scanner.nextDouble();
                    scanner.nextLine();  
                    Song song = new Song(title, artist, duration);
                    playlist.addSong(song);
                    System.out.println("Song added to the playlist.");
                    break;

                case 2: 
                    System.out.print("Enter song title to remove: ");
                    String songToRemove = scanner.nextLine();
                    if (playlist.removeSong(songToRemove)) {
                        System.out.println("Song removed from the playlist.");
                    } else {
                        System.out.println("Song not found.");
                    }
                    break;

                case 3: 
                    playlist.displaySongs();
                    break;

                case 4: 
                    System.out.print("Enter song title to search: ");
                    String songToSearch = scanner.nextLine();
                    playlist.searchSong(songToSearch);
                    break;

                case 5: 
                    double totalDuration = playlist.TotalDuration();
                    System.out.println("Total duration of the playlist: " + totalDuration + " minutes");
                    break;

                case 6: 
                    System.out.println("Exiting the application.");
                    scanner.close();
                    return;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
