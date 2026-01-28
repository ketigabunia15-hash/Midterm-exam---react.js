export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Conditions of Use</a>
          <a href="#" style={styles.link}>Privacy Notice</a>
          <a href="#" style={styles.link}>Interest-Based Ads</a>
        </div>

        <div style={styles.copy}>
          © 1996–2026, FakeStore.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f3f3f3',
    borderTop: '1px solid #ddd',
    padding: '20px 0',
    marginTop: '40px',
    fontSize: '14px',
    color: '#555',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#0066c0',
  },
  copy: {
    marginTop: '10px',
  },
};
