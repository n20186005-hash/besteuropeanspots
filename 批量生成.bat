@echo off
color 0A

echo ====================================================
echo             [Batch Generator]
echo ====================================================
echo.
echo Checking folders...

if not exist "input-encyclopedia" mkdir "input-encyclopedia"
if not exist "input-travelogue" mkdir "input-travelogue"
if not exist "input-history" mkdir "input-history"

echo.
echo Folders checked.
echo Please put .txt files into these folders:
echo - input-encyclopedia
echo - input-travelogue
echo - input-history
echo.
echo ====================================================
echo.
echo CHOOSE GENERATION MODE:
echo.
echo [1] SKIP EXISTING (Default)
echo     - If the page already exists, it will be skipped.
echo     - Faster and safer.
echo.
echo [2] FORCE OVERWRITE 
echo     - Will regenerate and overwrite existing pages.
echo     - Use this if you updated the template or text and want to apply changes.
echo.
set /p choice="Please enter 1 or 2 (then press Enter): "

set FORCE_ARG=
if "%choice%"=="2" (
    echo.
    echo --- WARNING: FORCE OVERWRITE MODE ENABLED ---
    set FORCE_ARG=--force
) else (
    echo.
    echo --- MODE: SKIP EXISTING PAGES ---
)

echo.
echo Starting generation...
node batch-generate.js %FORCE_ARG%

if %errorlevel% neq 0 (
    echo.
    echo ====================================================
    echo               [ERROR] GENERATION FAILED!
    echo ====================================================
    echo Node.js script encountered an error. Please check the logs above.
    echo.
    pause
    exit /b %errorlevel%
)

echo.
echo ====================================================
echo                  ALL DONE!
echo ====================================================
echo You can run npm run dev to preview.
echo.
pause