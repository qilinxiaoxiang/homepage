# Shawn Xiang's project notes

Personal website: https://shawnxiang.com/.

## Source and publishing

The static site lives in `docs/`. GitHub Pages publishes the `main` branch's `/docs` directory for `qilinxiaoxiang/homepage`; `docs/CNAME` preserves the custom domain. There is no build dependency. Serve locally with `python3 -m http.server 8080 --directory docs`.

The home page links to five independent project pages. They share `docs/portfolio.css`; existing articles retain their own presentation. Videos and photographs in `docs/microduck/` retain their recording dates and upstream credits.

## Content boundaries

- Project results describe their actual evaluation, sample size, and baseline.
- LLM structural compliance is not clinical correctness.
- VoxClinBench is an independent benchmark; its predecessor clinical-voice model work was collaborative. No conference acceptance is claimed.
- EEG normalized error is lower-is-better; the reported results do not beat the mean-prediction baseline.
- Walking demonstrations use Pollen Robotics policies. Continuous camera-guided MicroDuck pickup is still in development.
- The cooling rig is an ongoing team project. CAD images are labeled as renders; pilot measurements do not establish clinical or comfort benefit.
- Do not publish restricted audio, participant-level health data, calibration frames containing people, credentials, or private runtime endpoints.
