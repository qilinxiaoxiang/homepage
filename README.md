# Shawn Xiang's project notes

Personal website: https://shawnxiang.com/.

## Source and publishing

The static site lives in `docs/`. GitHub Pages publishes the `main` branch's `/docs` directory for `qilinxiaoxiang/homepage`; `docs/CNAME` preserves the custom domain. There is no build dependency. Serve locally with `python3 -m http.server 8080 --directory docs`.

The home page links to seven project pages (MicroDuck, its flight pack under `docs/microduck/flight/`, Scout Mini, cooling robot, LLM, voice, EEG) and to two sections of the MicroDuck page (`#sim-vs-real`, `#mochi`). Robotics work comes first. They share `docs/portfolio.css`; existing articles retain their own presentation. Videos and photographs in `docs/microduck/` retain their recording dates and upstream credits.

## Content boundaries

- Project results describe their actual evaluation, sample size, and baseline.
- LLM structural compliance is not clinical correctness.
- VoxClinBench is an independent benchmark; its predecessor clinical-voice model work was collaborative. No conference acceptance is claimed.
- EEG normalized error is lower-is-better; the reported results do not beat the mean-prediction baseline.
- Walking demonstrations use Pollen Robotics policies. Continuous camera-guided MicroDuck pickup is still in development.
- The MicroDuck flight pack is simulation only until hardware is assembled and tested; the page says so in its heading, status note and every caption, and the controller is called a stand-in for ArduPilot.
- Sim-versus-robot replay figures state what was counted (fall or no fall per logged action) and that most agreeing actions are uneventful.
- Scout Mini belongs to the CMU XRTC Lab: no code link, no people named, existing packages credited, and autonomous driving is described as sub-meter trials.
- Wake-word results give held-out counts and their limits. Pocket Chords is not listed among the projects before its App Store launch.
- The cooling rig is an ongoing team project. CAD images are labeled as renders; pilot measurements do not establish clinical or comfort benefit.
- Do not publish restricted audio, participant-level health data, calibration frames containing people, credentials, or private runtime endpoints.
