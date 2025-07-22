export default function Footer() {
  return (
    <footer className="mt-auto py-8 text-center text-xs text-foreground/60">
      <p>&copy; {new Date().getFullYear()} Yusuke Fukuda. All rights reserved.</p>
    </footer>
  );
}